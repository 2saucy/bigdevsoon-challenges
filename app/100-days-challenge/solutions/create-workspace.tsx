import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";

const CreateWorkSpace = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <SetupWorkspace />
    </main>
  );
};

export default CreateWorkSpace;

const SetupWorkspace = () => {
  const industries = [
    "Finance",
    "Health",
    "Technology",
    "Education",
    "Real Estate",
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <form>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Setup Workspace</h2>
          <div className="space-y-2">
            <label className="font-semibold">
              Workspace name<span className="text-red">*</span>
            </label>
            <Input
              className="focus-visible:ring-2 focus-visible:ring-green-300"
              placeholder="Workspace Name"
            />
          </div>
          <div className="space-y-2">
            <label className="font-semibold">
              Select your industry<span className="text-red">*</span>
            </label>
            <Select>
              <SelectTrigger className="focus:ring-2 focus:ring-green-300">
                Select your industry
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem value={industry} key={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <hr className="my-6" />
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Add a workspace members</h2>
          <div className="space-y-2">
            <label className="font-semibold">Member email</label>
            <div className="flex items-center gap-2">
              <Input
                className="focus-visible:ring-2 focus-visible:ring-green-300"
                placeholder="Member email"
              />
              <Button variant={"secondary"}>Invite</Button>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  className="h-full w-full object-cover"
                  src="/assets/100-days-challenge/user-profile/pfp.jpg"
                />
              </Avatar>
              <div className="flex flex-col">
                <h3 className="font-semibold">User Name</h3>
                <span className="text-sm text-slate-300">
                  user.name@gmail.com
                </span>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="opacity-50 outline-none hover:opacity-100">
                <FaChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Resend Invitation</DropdownMenuItem>
                <DropdownMenuItem>Remove</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Button
          type="submit"
          className="mt-4 w-full bg-green-700 hover:bg-green-800"
        >
          Send workspace
        </Button>
      </form>
    </div>
  );
};
