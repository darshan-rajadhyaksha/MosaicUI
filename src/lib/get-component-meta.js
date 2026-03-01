const getComponentMeta = ({
  key = "", 
  
  // info
  title = "",
  description = "",
  category = {
    key: ""
  },
  
  // preview and code
  previewComponent,
  installationSteps,

  // examples
  examplesComponent,

  // props
  propsDocument,
  isCustomPropsDoc = false,
}) => {
  return ({
    key,
    info: {
      title,
      category,
      description,
    },
    previewAndCode: {
      previewComponent,
      installationSteps,
    },
    examples: (examplesComponent && ({
      examplesComponent,
    })),
    propsDocument: (propsDocument && ({
      component: propsDocument,
      isCustom: isCustomPropsDoc,
    })),
  });
};

export default getComponentMeta;
