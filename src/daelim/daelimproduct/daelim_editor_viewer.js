import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, EditorState} from 'draft-js'
// import Type from 'typeHelpers'

// function isDraftable(content) {
    // return Type(content, 'object') && content.hasOwnProperty('entityMap')
// }

export default class DraftViewer extends React.Component {

    // constructor(props) {
    //     super(props)
    //     // const contentState =   ContentState.createFromBlockArray(convertFromRaw(JSON.parse(this.props.text)));
    //     // this.state= {editorState :EditorState.createWithContent(contentState)}
    //     // console.log(this.props.text);
    //     // console.log(this.state.editorState);
    //     // this.setState({editorState: EditorState.createWithContent(contentState)});
    // }

    render() {
            let content = this.props.text
            console.log("render")
          
            content = JSON.parse(content)
            console.log(convertFromRaw(content))
            content = EditorState.createWithContent(
                // ContentState.createFromBlockArray(
                    convertFromRaw(content)
                    // )
                    )

            return <Editor readOnly={true}
                         editorState={content} 
                         toolbar={{
                            options:[]
                             }}
                         />
        // }
        // return <p>{content}</p>
    }

}