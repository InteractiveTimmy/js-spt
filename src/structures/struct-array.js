const StructArray = {
  create: ( ) => {
    return new Float32Array( [
      Math.random( ),
      Math.random( ),
      Math.random( )
    ] );
  },
  operate: ( struct ) => {
    struct[0] = Math.random( );
    struct[1] = Math.random( );
    struct[2] = Math.random( );  
  }
}

export default StructArray;