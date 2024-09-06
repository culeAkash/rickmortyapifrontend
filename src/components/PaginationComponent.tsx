
import React, { useEffect, useState } from "react";
import { Box, List, Pagination } from "@mui/material";
import { useCharacters } from "../hooks/useCharacters";
import { CharacterFilterInterface, PageInfoInterface } from "../utils/interfaces"; 
import { ChangeFilterType } from "../utils/types";

export default function PaginationComponent({changePage,pageInfo,page=1}:{changePage : (page:number)=>void,pageInfo:PageInfoInterface,page:number}) {


   return (
    <div className="mt-4 text-center">
        <Pagination count={pageInfo?.pages} page={page} onChange={(e,p)=>changePage(p)} showFirstButton showLastButton size="large"/>
    </div>
    
   )
}