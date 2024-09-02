import CharacterCard from "./CharacterCard";

export default function CharacterCards(){

    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]


    return (
        <div className="grid grid-cols-3 gap-3 max-w-full px-3">
            {arr.map((a)=>{
                return (
                    <CharacterCard/>
                )
            })}
           
        </div>
    )
}