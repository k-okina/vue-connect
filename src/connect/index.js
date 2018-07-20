import isPlainObject from "is-plain-object";
import Vue from "vue";

function generateMappedComponentByNameOrComponentClass(
  props,
  nameOrClass,
  name
) {
  const render = h => h(nameOrClass, { props });
  return { name, render };
}

export default function connect() {
  // propsを1つに纏める
  const reducer = (props, argument) => Object.assign({}, props, argument);
  const props = Object.values(arguments).reduce(reducer, {});

  return (source, name = "MappedComponent") => {
    const nameOrClass = isPlainObject(source) ? Vue.extend(source) : source;
    return generateMappedComponentByNameOrComponentClass(
      props,
      nameOrClass,
      name
    );
  };
}
