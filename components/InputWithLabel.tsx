import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputWithLabelProps {
    title: string;
    label: string;
    disabled?: boolean
}
export function InputWithLabel({title, label, disabled}: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="text">{title}</Label>
      <Input type="text" id="text" placeholder={label}/>
    </div>
  )
}
