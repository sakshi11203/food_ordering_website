

const ResCategory=({data})=>{
   
console.log(data); 

    return (<div>
            <div className="w-6/12 bg-gray-100 shadow-lg p-4">
                
                <span>{data.title}</span>
                <span>⬇️</span>
            </div>
        </div>
    );
};

export default ResCategory;   