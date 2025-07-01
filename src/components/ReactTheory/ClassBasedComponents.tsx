import React from "react";
import { Button } from "../ui/button";


class CounterClassBased extends React.Component{
    constructor(props:{name:string}){
        super(props);
        this.state={
            count:0,
        }
    }
    incrementCount=()=>{
        this.setState({count:this.state.count+1});
    }
    
    componentDidMount(): void {
        console.log("Component Did Mount");
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("Component Did Update");
    }

    componentWillUnmount(): void {
        console.log("Component Will Unmount");
    }

   render(): React.ReactNode {
      return ( <>
        <h1 className="text-center text-2xl mb-10">Class Based Components</h1>
        <p className="inline mr-4">COUNT : {this.state.count}</p>
        <Button onClick={this.incrementCount} className="cursor-pointer">Increment Count</Button>
       </>)
   }
}

export default CounterClassBased;