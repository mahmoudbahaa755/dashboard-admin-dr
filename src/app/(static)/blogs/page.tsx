import Form from "./form";

export default function Forms(){
    return(
        
        <div className="flex  grid-cols-1 sm:grid-cols-2 mt-5 gap-4">
        
        
            {/* <Form hasBorderRadius={true} label={""} placeholder={""} /> */}
            <Form  hasBorderRadius={false} label={""} placeholder={""}/>
            </div>
    )
}