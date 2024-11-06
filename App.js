import logo from './logo.svg';
import './App.css';
import ClassComponent from './Component/ClassComponent';
import FunctionComponent from './Component/FunctionComponent';
import ArrowFunction from './Component/ArrowFunction';
import PropsArrowFunction from './Component/PropsArrowFunction';
import PropsFunctionComponent from './Component/PropsFunctionComponent';
import PropsClassComponent from './Component/PropsClassComponent';
import StateClassComponent from './Component/StateClassComponent';
import UseStateExample from './Component/UseState';
import ArrayState from './Component/ArrayState';
import ArrayofObject from './Component/ArrayofObject';
import CSSInlineStyling from './Component/CSSInlineStyling';
import SimpleInterestCalculator from './Component/Project1';
import ConditionalRending from './Component/ConditionalRending';
import ArrayStateAddClear from './Component/ArrayState-Add,Clear';
import ArrayStateDelete from './Component/ArrayState-Delete';
import ArrayStateProject from './Component/ArrayState-Edit';
import ObjectState1 from './Component/ObjectState';
import QRCodeGenerator from './Component/QRCodeGenerator';
import FormDesign from './Form/FormDesign';
import Form from './Form/Form';
import LifeCycle from './Component/LifeCycle';
import UseEffectAPIExample from './Component/UseEffectAPIExample';
import APIProgram from './Component/APIProgram';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <SimpleInterestCalculator/> */}


        {/* <ClassComponent/> */}
        {/* <FunctionComponent/> */}
        {/* <ArrowFunction/> */}

        {/* <PropsArrowFunction Course="Credo Systemz - Front End Web Development"
        Topics = "HTML CSS BS JS ReactJS"/> */}
        {/* <PropsFunctionComponent Name="Sridhar Raj P"/> */}
        {/* <PropsClassComponent Course="Credo Systemz"/> */}

        {/* <StateClassComponent/> */}

        {/* <UseStateExample/> */}

        {/* <ArrayState/> */}
        {/* <ArrayofObject/> */}

        {/* <ConditionalRending/> */}

        {/* <ArrayStateAddClear/> */}
        {/* <ArrayStateDelete/> */}
        {/* <ArrayStateProject/> */}

        {/* <ObjectState1/> */}

        {/* <QRCodeGenerator/> */}

        {/* <FormDesign/> */}
        {/* <Form/> */}


        {/* <CSSInlineStyling/> */}
        {/* <LifeCycle/> */}

        {/* <UseEffectAPIExample/> */}
        <APIProgram/>
      </header>
    </div>
  );
}

export default App;
