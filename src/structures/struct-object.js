const StructObject = {
  create: ( ) => {
    return {
      data: new Float32Array( [
        Math.random( ),
        Math.random( ),
        Math.random( )
      ] )
    };
  },
  operate: ( struct ) => {
    struct.data[0] = Math.random( );
    struct.data[1] = Math.random( );
    struct.data[2] = Math.random( );  
  }
}

export default StructObject;