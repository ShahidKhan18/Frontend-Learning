import { Outlet } from 'react-router-dom';
const ReactTheoryHome = () => {
  return (
    <div>
      <h2 className='text-center -mt-10 mb-4 underline uppercase text-4xl font-extrabold'>React Theory</h2>
      <Outlet /> 
    </div>
  )
}
export default ReactTheoryHome