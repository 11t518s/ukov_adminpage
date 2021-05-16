import React, { useEffect, useState } from 'react';
import { dbService, storageService } from '../fbase';
import { v4 as uuidv4 } from "uuid";


function Project() {

    // 삭제할 때 어떤 것을 삭제할 지 확인하기 위해 기존 데이터를 불러옴
    const [project, setproject] = useState([])
    const getproject = async () =>{
        const dbproject = await dbService.collection("project").get();
        dbproject.forEach((document) => {
            const newproject = {
                ...document.data(),
                id: document.id
            };
            setproject((prev) => [newproject, ...prev]);
        });
    };
    useEffect(()=>{
        getproject();
    }, [])


    // 새로 추가할 스트링 state 선언
    const [newprojectLink, setNewprojectLink] = useState();
    const [newTitle, setNewTitle] = useState();
    const [newSubtitle, setNewSubtitle] = useState();


    // input태그에 입력 시 각 state에 정보 업로드
    const onLinkChange = (event) => {
        const {target:{value}} = event;
        setNewprojectLink(value)
    }
    const onTitleChange = (event) => {
        const {target:{value}} = event;
        setNewTitle(value)
    }
    const onSubtitleChange = (event) => {
        const {target:{value}} = event;
        setNewSubtitle(value)
    }


    // submit 함수 
    const newSubmit = async (event) => {
        event.preventDefault();

        // 파일을 스토리지에 업로드하기
        const fireRef = storageService.ref().child(`project/${uuidv4()}`)
        const response = await fireRef.putString(newFile, "data_url")
        const projectURL = await response.ref.getDownloadURL();


        // 스트링 정보를 넣어주기
        await dbService.collection("project").add({
            title: newTitle,
            subtitle: newSubtitle,
            projectLink: newprojectLink,
            projectURL,
            createdAt: Date.now(),
        })

        // 새로 업로드 후 input 태그 초기화
        setNewprojectLink('')
        setNewTitle('')
        setNewSubtitle('')
        setNewFile()
        alert('새로고침 하신 후 확인해보세요 :)')
    }

    
    // 파일을 데이터 url로 받아서 화면상에 보여주기
    const [newFile, setNewFile] = useState()
    const fileChange = (event) => {
        const {
            target: {files}
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            setNewFile(finishedEvent.currentTarget.result)
        };
        reader.readAsDataURL(theFile);
    };

    return (
        <>
            <div className='title'>프로그램탭의 프로젝트가 수정되는 곳입니다!</div>
            <div className='subtitle'> 추가하기 </div>

                <form onSubmit={newSubmit}>
                이미지 파일을 추가하세요<input type='file' onChange={fileChange}/>
                {newFile && <img src={newFile} alt='file' width='300px' height='300px' />}<br/>
                    <input  type='text' value={newprojectLink} onChange={onLinkChange} placeholder='링크 주소를 입력하세요'/><br/>
                    <input  type='text' value={newTitle} onChange={onTitleChange} placeholder='제목을 입력해주세요'/><br/>
                    <input  type='text' value={newSubtitle} onChange={onSubtitleChange} placeholder='부제를 입력해주세요'/><br/>
                    <input  type='submit' value="추가하기" className='button' />
                </form>
            <div className='subtitle'>삭제하기{project.id}</div>


            {project.map((project)=>(
                <>
                  <div className='listBox' key={project.id}>
                      <a href={project.projectLink}>
                          <div className='smallBox'>
                            <img src={project.projectURL} alt='project'/>
                          </div>
                          <h1>{project.title}</h1>
                          <h2>{project.subtitle}</h2>
                      </a>
                    <button onClick={()=>{
                        // 컨펌 후 firesore에서 데이터 삭제, storage에서 데이터 삭제
                        const del = window.confirm("지우시겠습니까?");
                            if (del) {
                        dbService.doc(`project/${project.id}`).delete()
                        storageService.refFromURL(project.projectURL).delete()
                        alert('삭제를 완료했습니다. 새로고침 하시면 확인 가능합니다!')
                    }
                    }}>삭제하기</button>
                    </div>
                </>
            ))}        
        </>
    )
}

export default Project;