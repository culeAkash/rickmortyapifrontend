
import React from "react";
import { Pagination } from "@mui/material";

export default function PaginationComponent(){
   return (
    <div className="mt-4">
        <Pagination count={11} defaultPage={6} boundaryCount={2} />
    </div>
    
   )
}