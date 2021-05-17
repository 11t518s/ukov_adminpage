import React, { useEffect, useState } from 'react';
import { dbService, firebaseInstance ,storageService } from '../fbase';

// 기존 데이터 가져오기
function Info() {
    const [info, setInfo] = useState();
    const getInfo = async () =>{
        const dbinfo = await dbService.collection("UKOV").get();
        dbinfo.forEach((document) => {
            const newInfo = {
                ...document.data(),
                id: document.id
            };
            setInfo(newInfo)
        });
    };
    useEffect(()=>{
        getInfo();  
    }, []);
    // 변경될 값들 state설정하기
    const [Link, setNewLink] = useState(info?.Link);
    const [Finish, setNewFinish] = useState(info?.Finish);
    const [Alumni, setNewAlumni] = useState(info?.Alumni);
    const [resumePass, setNewresumePass] = useState(info?.resumePass);
    const [start_date, setNewstart_date] = useState(info?.start_date);
    const [project, setNewproject] = useState(info?.project);
    const [end_date, setNewend_date] = useState(info?.end_date);
    const [meeting1, setNewmeeting1] = useState(info?.meeting1);
    const [meeting2, setNewmeeting2] = useState(info?.meeting2);
    const [th, setNewth] = useState(info?.th);
    const [year, setNewyear] = useState(info?.year);

    const newthChange = (event) => {
        const {target :{value}} = event;
        setNewth(value)
    };
    const newyearChange = (event) => {
            const {target :{value}} = event;
            setNewyear(value)
    };
    const newend_dateChange = (event) => {
            const {target :{value}} = event;
            setNewend_date(value)
    };
    const newmeeting1Change = (event) => {
            const {target :{value}} = event;
            setNewmeeting1(value)
    };
    const newmeeting2Change = (event) => {
            const {target :{value}} = event;
            setNewmeeting2(value)
    };
    const newprojectChange = (event) => {
            const {target :{value}} = event;
            setNewproject(value)
    };
    const newresumePassChange = (event) => {
            const {target :{value}} = event;
            setNewresumePass(value)
    };
    const newstart_dateChange = (event) => {
            const {target :{value}} = event;
            setNewstart_date(value)
    };
    const newLinkChange = (event) => {
            const {target :{value}} = event;
            setNewLink(value)
    };
    const newFinishChange = (event) => {
        const {target :{value}} = event;
        setNewFinish(value)
    }
    const newAlumniChange = (event) => {
        const {target :{value}} = event;
        setNewAlumni(value)
    };

    // input으로 file 들어오는 것 storage에 들어가고, url 가져오기
    const [newFile, setNewFile] = useState(null)
    const newfileChange = (event) => {
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

    const onSubmit = async (event) => {
        event.preventDefault();

        // 파일 이름 및 위치, url받아오기
        if (newFile){
        const fireRef = storageService.ref().child(`이름_UKOV_${info?.th}기_지원서.docx`)
        const response = await fireRef.putString(newFile, "data_url")
        setNewFile(response.ref.getDownloadURL())
        };

        await dbService.collection(`UKOV/${info?.id}`).update({
            Finish: firebaseInstance.firestore.Timestamp.now(),
            Link,
            alumni: Alumni,
            end_date,
            start_date,
            file: newFile,
            meeting1,
            meeting2,
            project,
            resumePass,
            th,
            year,
        });
        alert('새로고침 하신 후 확인해보세요 :)');
    };

    return (
        <>
        <div className='title'>페이지에 들어갈 전반적인 정보들을 수정합니다.<br/><br/>
            흐릿하게 쓰여져 있는 것들은 현재 홈페이지에 쓰여있는 내용들입니다.<br/>
            <b>정보들을 모두 입력</b>하고(파일도 추가하고) 제출해주셔야 정상 제출 됩니다!<br/>
            참고하셔서 수정하시고 수정하시면 홈페이지에 바로 수정됩니당~~~</div><br/><br/>
        <form onSubmit={onSubmit}>
            <input value={Link || ''} onChange={newLinkChange} placeholder={info?.Link}/>구글 독스, typeform등 서류 받을 링크를 넣어주세요<br/><br/>
            지원서(docx...)를 넣어주세요<input type='file' onChange={newfileChange} /><br/><br/>
            <input value={th || ''} onChange={newthChange} placeholder={info?.th} type='number' />이제 몇기를 뽑는 것일까요?<br/>
            <input value={year || ''} onChange={newyearChange} placeholder={info?.year} type='number'/>유코브는 몇년 됐나요?<br/>
            <input value={Alumni || ''} onChange={newAlumniChange} placeholder={info?.alumni} type='number'/>지금까지 몇명의 ukov알럼나이가 있나요?<br/>

            <input value={project || ''} onChange={newprojectChange} placeholder={info?.project} type='number'/>유코브는 지금까지 몇 개의 프로젝트를 했나요?<br/><br/>

            <p>홈페이지에 그대로 나오니 원하는 대로 적어주시면 됩니다 :)</p>
            <input value={start_date || ''} onChange={newstart_dateChange} placeholder={info?.start_date}/>언제부터 모집이 시작되나요?<br/>
            <input value={end_date || ''} onChange={newend_dateChange} placeholder={info?.end_date}/>언제 모집이 마감되나요?<br/>
            <input value={resumePass || ''} onChange={newresumePassChange} placeholder={info?.resumePass}/>서류 합격 발표일은 언제일까요?<br/>
            <input value={meeting1 || ''} onChange={newmeeting1Change} placeholder={info?.meeting1}/>첫 번째 면접 날<br/>
            <input value={meeting2 || ''} onChange={newmeeting2Change} placeholder={info?.meeting2}/>두 번째 면접 날<br/><br/>

            <p>이건 날짜 데이터 따로 받습니다! 날짜 넣으시면 시간에 맞게 리크루팅 탭에 지원하기 버튼이 생기고 사라집니다</p>

            <input value={Finish || ''} onChange={newFinishChange} type='date'/>서류 마감날짜를 넣어주세요<br/>
            <input type='submit' value="수정하기" className='button' />
        </form>
        </>

    )
};

export default Info;