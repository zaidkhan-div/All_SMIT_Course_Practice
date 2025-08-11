import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "sonner";
import * as Yup from "yup";
import { db } from "../firbase.js";
import { Textarea } from "@/components/ui/textarea"; 

const AddTasks = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const initialValues = {
        taskName: "",
        description: "",
        deadline: "",
    };

    const taskSchema = Yup.object().shape({
        taskName: Yup.string().required("Task name is required"),
        description: Yup.string().required("Description is required"),
        deadline: Yup.date()
            .min(new Date(), "Deadline must be in the future")
            .required("Deadline is required"),
    });

    const formik = useFormik({
        initialValues,
        validationSchema: taskSchema,
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const collectionRef = collection(db, "tasks");
                const data = {
                    taskName: values.taskName,
                    description: values.description,
                    deadline: values.deadline,
                    status: "pending",
                    timestamp: serverTimestamp(),
                };
                await addDoc(collectionRef, data);
                toast("Task has been added!");
            } catch (error) {
                toast(error?.message);
            } finally {
                formik.resetForm();
                setLoading(false);
            }
        },
    });

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Task</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Task</DialogTitle>
                        <DialogDescription>
                            Please enter task details below
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="taskName">Task Name</Label>
                            <Input
                                id="taskName"
                                name="taskName"
                                value={formik.values.taskName}
                                onChange={formik.handleChange}
                                placeholder="Enter Task Name"
                            />
                            {formik.errors.taskName && formik.touched.taskName && (
                                <span className="text-red-500 text-[12px]">
                                    {formik.errors.taskName}
                                </span>
                            )}
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                placeholder="Enter Task Description"
                            />
                            {formik.errors.description && formik.touched.description && (
                                <span className="text-red-500 text-[12px]">
                                    {formik.errors.description}
                                </span>
                            )}
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="deadline">Deadline</Label>
                            <Input
                                id="deadline"
                                name="deadline"
                                type="date"
                                value={formik.values.deadline}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.deadline && formik.touched.deadline && (
                                <span className="text-red-500 text-[12px]">
                                    {formik.errors.deadline}
                                </span>
                            )}
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                        </DialogClose>
                        <Button
                            onClick={() => {
                                formik.submitForm();
                                setOpen(false)
                            }}
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}

export default AddTasks;
