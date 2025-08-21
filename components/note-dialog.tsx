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
import { useState } from "react";

export function DialogOpen() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const createNote = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content: desc,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setTitle("");
      setDesc("");
    } else {
      const error = await res.json();
      console.error("failed to create note", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={createNote}>
          <DialogHeader>
            <DialogTitle>Create new Note</DialogTitle>
            <DialogDescription>
              Add details below to create a new note.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label>Title</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="name"
              />
            </div>
            <div className="grid gap-3">
              <Label>Description</Label>
              <Input
                name="description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create Note</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
