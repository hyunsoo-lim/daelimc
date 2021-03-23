import React, { Component } from 'react';
    import { EditorState, convertToRaw } from 'draft-js';
    import { Editor } from 'react-draft-wysiwyg';
    import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
    import styled from 'styled-components';
    import axios from 'axios';
    
    const MyBlock = styled.div`
    .wrapper-class{
        width: 100%;
        margin-bottom: 4rem;
        border 1px solid #D5D5D5;
        }
    .editor {
      height: 500px !important;
      border: 1px solid #f1f1f1 !important;
      padding: 5px !important;
      border-radius: 2px !important;
    }`;
    class MyEditor extends Component {
    
      constructor(props) {
        super(props);
        this.state = {
          editorState: EditorState.createEmpty(),
          uploadedImages: []
        };
        this.uploadImageCallBack = this.uploadImageCallBack.bind(this);
      }
    
      onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });

       // the raw state, stringified
      // const rawDraftContentState = JSON.stringify( convertToRaw(this.state.editorState.getCurrentContent()) );
      // // convert the raw state back to a useable ContentState object
      // const contentState = convertFromRaw( JSON.parse( rawDraftContentState) );
      // console.log(contentState);

      var text = this.state.editorState.getCurrentContent().getBlocksAsArray();
      var finalText;
     text.map((item) => {
     finalText = item.getText() + finalText});
     console.log(finalText)
     // the raw state, stringified
      const rawDraftContentState = convertToRaw(this.state.editorState.getCurrentContent());
     this.props.textHandler(rawDraftContentState);
      };
    
      

      uploadImageCallBack = (file) => {
        return new Promise((resolve, reject) => {
           const data = new FormData();
          //  const imageObject = {
          //  file: file,
           const localSrc= URL.createObjectURL(file)
          // }
          data.append("name", this.props.name);
          data.append("img",file);
           axios.post('../api/imageupload', data).then(responseImage => {
                resolve({ data: { link: "/uploads/"+this.props.name+"/"+responseImage.data.filename } });
                console.log("upload");
                console.log(responseImage);
           })
        });
    }
    
      // _uploadImageCallBack(file) {
      //   // long story short, every time we upload an image, we
      //   // need to save it to the state so we can get it's data
      //   // later when we decide what to do with it.
    
      //   // Make sure you have a uploadImages: [] as your default state
      //   let uploadedImages = this.state.uploadedImages;
    
      //   const imageObject = {
      //     file: file,
      //     localSrc: URL.createObjectURL(file),
      //   }
    
      //   uploadedImages.push(imageObject);
    
      //   this.setState({ uploadedImages: uploadedImages })
    
      //   // We need to return a promise with the image src
      //   // the img src we will use here will be what's needed
      //   // to preview it in the browser. This will be different than what
      //   // we will see in the index.md file we generate.
      //   return new Promise(
      //     (resolve, reject) => {
      //       resolve({ data: { link: imageObject.localSrc } });
      //     }
      //   );
      // }



      render() {
        const { editorState } = this.state;
        return (
          <MyBlock>
              <Editor name="text1"
                // 에디터와 툴바 모두에 적용되는 클래스
                wrapperClassName="wrapper-class"
                // 에디터 주변에 적용된 클래스
                editorClassName="editor"
                // 툴바 주위에 적용된 클래스
                toolbarClassName="toolbar-class"
                editorState={editorState}
               
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true },
                  image: { uploadCallback: this.uploadImageCallBack },
                  inputAccept: 'application/pdf,text/plain,application/vnd.openxmlformatsofficedocument.wordprocessingml.document,application/msword,application/vnd.ms-excel'
                }}
              />
          </MyBlock>
        );
      }
    }
    
    export default MyEditor;