import { CreateRoomForm } from '@/components/create-room-form'
import { RommList } from '@/components/room-list'

export function CreateRoom() {
  return (
    <div className="min-h-screen px-8 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <CreateRoomForm />
          <RommList />
        </div>
      </div>
    </div>
  )
}
