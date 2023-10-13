const jobDataLoader=async()=>{
    const res=await fetch('jobs.json');
    const data=await res.json();
    return data;

}
export default jobDataLoader;