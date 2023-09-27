import {inngest} from "@/inngest/inngest.client";

async function triggerInngestEvent() {
    'use server'
    await inngest.send({
        name: 'test/hello.world',
        data: {
            message: 'Hello From Next.js!!!!'
        }
    })
}
export default function Home() {
  return (
    <div>
      <form action={triggerInngestEvent}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Trigger Inngest Event
          </button>
      </form>
    </div>
  )
}
