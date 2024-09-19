import React from "react";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "sfsdds";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="data:image/jpeg;base64,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" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quo
          asperiores debitis dolores id delectus eaque quisquam distinctio ipsa
          consectetur facilis et quod harum, ex maxime, fugiat accusantium iusto
          quibusdam!
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          12 Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          Part Time
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          24LPA
        </Badge>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${jobId}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
