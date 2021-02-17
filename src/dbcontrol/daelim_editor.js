import React, { Component } from 'react';
    
    import { EditorState } from 'draft-js';
    import { Editor } from 'react-draft-wysiwyg';
    import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
    import styled from 'styled-components';
    import axios from 'axios';
    
    const MyBlock = styled.div`
    .wrapper-class{
        width: 80%;
        margin: 0 auto;
        margin-bottom: 4rem;
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
      };
    
      

      uploadImageCallBack = (file) => {
        return new Promise((resolve, reject) => {
           const data = new FormData();
           data.append("img", file)
           axios.post('api/imageupload', data).then(responseImage => {
                resolve({ data: { link: responseImage.filename } });
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
              <Editor
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