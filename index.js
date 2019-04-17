import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';

const editor = new EditorJs({
    
    holderId: 'editorjs',
    tools: {
        header: {
        class: Header,
        inlineToolBar: ['link']
        },

        list: {
            class: List,
            inlineToolbar: [
                'link',
                'bold'
            ]
        },
        embed: {
            class: Embed,
            inlineToolbar: false,
            config: {
                youtube: true,
                coub: true
            }
        }
    }
})

let saveBtn = document.querySelector('button');

saveBtn.addEventListener('click', function() {
    editor.saver().then((outputData) => {
        console.log('Article data: ', outputData)
    }).catch((error) => {
        console.log('Saving failed: ', error)
    }); 
})