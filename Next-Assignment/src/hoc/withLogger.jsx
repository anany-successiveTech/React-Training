"use client";
import { useEffect } from "react";

const withLogger = (WrappedComponent) => {
  return function LoggingOfComponents(props) {
    
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);

      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);

    useEffect(() => {
      console.log(`${WrappedComponent.name} updated with props:`, props);
    }, [props]);

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
