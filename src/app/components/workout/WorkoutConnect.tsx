"use client"
import { useWorkout } from "@/app/context/WorkoutContext"
import { Workout } from "@/app/types/workout"
import toast from "react-hot-toast"

type WorkoutConnectProps = {
    workout: Workout
}
const WorkoutConnect = ({ workout }: WorkoutConnectProps) => {
    const { addToPlan, saveWorkout } = useWorkout()

    const addWorkout = () => {
        addToPlan(workout)
        toast.success("Added to today's plan!")
    }
    const saveWorkoutItems = () => {
        saveWorkout(workout)
        toast.success("Saved for later!")
    }

    return (
        <div className="mt-7 flex flex-wrap gap-3">



            <button
                onClick={addWorkout}
                className="mt-5 rounded-xl cursor-pointer bg-(--primary-dark) px-6 py-3 font-semibold  text-white hover:bg-(--primary)"
            >
                ＋ Add to today's plan
            </button>




            <button
                onClick={saveWorkoutItems}
                className="rounded-xl cursor-pointer mt-5 border border-(--border) px-5 py-3 text-[15px] font-semibold text-(--primary-dark) hover:bg-(--primary-soft)"
            >
                ♡ Save for later
            </button>



        </div>
    )
}

export default WorkoutConnect