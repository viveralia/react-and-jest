// Importar todas las librerías junto con el componente, enzyme ayuda a ejecutar las pruebas con componentes de React junto con el adaptador
import React from "react";
import Hello from "../components/Hello";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// Iniciando las pruebas
describe("Añadiendo pruebas a React", () => {
  test("Comprobando el texto que recibe por props", () => {
    const data = { title: "Hola Jest" };
    const wrapper = mount(<Hello title={data.title} />);
    const h1 = wrapper.find("h1");
    // Testea si el texto del componente es 'Hola Jest'
    expect(h1.text()).toBe("Hola Jest");
  });
});
