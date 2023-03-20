export function getServerSideProps() {
  return {
    props: {
      stringData: 'Hello World',
      numberData: 123,
      dateData: new Date(),
    },
  };
}



function Demo(props: any) {
  console.log('>>> type of dataData', typeof props.dateData);

  return <h1>Hello World</h1>;
}

export default Demo;
