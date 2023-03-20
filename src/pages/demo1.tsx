export function getServerSideProps() {
  return {
    props: {
      stringData: 'Hello World',
      numberData: 123,
      dateData: new Date(),
    },
  };
}



export {default} from "../views/Demo/Demo";
