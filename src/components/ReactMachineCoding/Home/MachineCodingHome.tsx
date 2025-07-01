import { Outlet } from 'react-router-dom';
const MachineCodingHome = () => {
  return (
    <div>
      <h2 className='text-center -mt-10 mb-4 underline uppercase text-4xl font-extrabold'>Machine Coding</h2>
      <Outlet /> 
    </div>
  )
}
export default MachineCodingHome