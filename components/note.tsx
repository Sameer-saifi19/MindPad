import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type noteCardProps = {
    title: string,
    description: string
};
export default function NoteCard({ title, description }: noteCardProps) {
  return (
    <>
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    </>
  )
}
