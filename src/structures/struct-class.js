class StructClass
{
  constructor ( )
  {
    this.data = new Float32Array( [
      Math.random( ),
      Math.random( ),
      Math.random( )
    ] );
  }

  operate ( )
  {
    this.data[0] = Math.random( ),
    this.data[1] = Math.random( ),
    this.data[2] = Math.random( )
  }
}

export default StructClass;