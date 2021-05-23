import React, { useEffect, useState } from 'react';
import { dbService, storageService } from '../fbase';
import { v4 as uuidv4 } from "uuid";


function Networking() {

    // 삭제할 때 어떤 것을 삭제할 지 확인하기 위해 기존 데이터를 불러옴
    const [networking, setnetworking] = useState([])
    const getnetworking = async () =>{
        const dbnetworking = await dbService.collection("networking").orderBy('createdAt').get();
        dbnetworking.forEach((document) => {
            const newnetworking = {
                ...document.data(),
                id: document.id
            };
            setnetworking((prev) => [newnetworking, ...prev]);
        });
    };
    useEffect(()=>{
        getnetworking();
    }, [])


    // 새로 추가할 스트링 state 선언
    const [newnetworkingLink, setNewnetworkingLink] = useState(null);
    const [newTitle, setNewTitle] = useState(null);
    const [newSubtitle, setNewSubtitle] = useState(null);


    // input태그에 입력 시 각 state에 정보 업로드
    const onLinkChange = (event) => {
        const {target:{value}} = event;
        setNewnetworkingLink(value)
    }
    const onTitleChange = (event) => {
        const {target:{value}} = event;
        setNewTitle(value)
    }
    const onSubtitleChange = (event) => {
        const {target:{value}} = event;
        setNewSubtitle(value)
    }
    // 파일을 데이터 url로 받아서 화면상에 보여주기
    const [newFile, setNewFile] = useState(null)
    const fileChange = (event) => {
        const {
            target: {files}
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            setNewFile(finishedEvent.currentTarget.result)
        };
        if(theFile){
            reader.readAsDataURL(theFile);}
    };



    // submit 함수 
    const newSubmit = async (event) => {
        event.preventDefault();

        // 파일을 스토리지에 업로드하기
        if (newFile){
            const fireRef = storageService.ref().child(`recruit/${uuidv4()}`)
            const response = await fireRef.putString(newFile, "data_url")
            setNewFile(response.ref.getDownloadURL())
            }

        // 스트링 정보를 넣어주기
        await dbService.collection("networking").add({
            title: newTitle,
            subtitle: newSubtitle,
            networkingLink: newnetworkingLink,
            networkingURL: newFile,
            createdAt: Date.now(),
        })

        // 새로 업로드 후 input 태그 초기화
        setNewnetworkingLink('')
        setNewTitle('')
        setNewSubtitle('')
        setNewFile('')
        alert('새로고침 하신 후 확인해보세요 :)')
    }

    

    return (
        <>
            <div className='title'>프로그램탭의 네트워킹이 수정되는 곳입니다!</div>
            <div className='subtitle'> 추가하기 </div>

                <form onSubmit={newSubmit} className='editBox'>
                이미지 파일을 추가하세요<input type='file' onChange={fileChange}/>
                {newFile && <img src={newFile} alt='file' width='300px' height='300px' />}<br/>
                    <input  type='text' value={newnetworkingLink} onChange={onLinkChange} placeholder='링크 주소를 입력하세요'/><br/>
                    <input  type='text' value={newTitle} onChange={onTitleChange} placeholder='제목을 입력해주세요'/><br/>
                    <input  type='text' value={newSubtitle} onChange={onSubtitleChange} placeholder='부제를 입력해주세요'/><br/>
                    <input  type='submit' value="추가하기" className='button'/>
                </form>
            <div className='subtitle'>삭제하기{networking.id}</div>

            {networking.map((networking)=>(
                <>
                  <div className='listBox' key={networking.id}>
                      <a href={networking.networkingLink}>
                          <div className='smallBox'>
                            <img src={networking.networkingURL} alt='networking'/>
                          </div>
                          <h1>{networking.title}</h1>
                          <h2>{networking.subtitle}</h2>
                      </a>
                    <button onClick={()=>{
                        // 컨펌 후 firesore에서 데이터 삭제, storage에서 데이터 삭제
                        const del = window.confirm("지우시겠습니까?");
                            if (del) {
                        dbService.doc(`networking/${networking.id}`).delete()
                        storageService.refFromURL(networking.networkingURL).delete()
                        alert('삭제를 완료했습니다. 새로고침 하시면 확인 가능합니다!')
                    }
                    }}>삭제하기</button>
                    </div>
                </>
            ))}        
        </>
    )
}

export default Networking;