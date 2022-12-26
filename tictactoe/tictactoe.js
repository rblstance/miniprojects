const map = document.querySelector('.map');

const SIZE = 3;

const mark = [];
let win = 0;
let turn = 1;

// set map
for(let i=0; i<SIZE; i++){
    const row = [];
    const mapRow = document.createElement('div');
    mapRow.setAttribute('class', 'row');
    for(let j=0; j<SIZE; j++){
        row.push(0);
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        const img = document.createElement('img');
        img.setAttribute('class', 'img');
        box.append(img);
        box.setAttribute('id', `y${i}x${j}`);
        box.addEventListener('click', e => {
            box.setAttribute('style', 'background-color : none');
            const yx = box.getAttribute('id'); // y0x0
            const y = parseInt(yx.charAt(1));
            const x = parseInt(yx.charAt(3));

            if(mark[y][x] === 0){
                if(turn === 1)
                    img.setAttribute('src', 'images/p1.png');
                else
                    img.setAttribute('src', 'images/p2.png');
                mark[y][x] = turn;
                checkWin();
                turn = turn === 1 ? 2 : 1;
            }
        });
        
        mapRow.append(box);
    }
    mark.push(row);
    map.append(mapRow);    
}





//for(let i=0; i<box.length; i++){
//    box[i].addEventListener('click', checkWin);
//}

// const box = document.body.getElementsByClassName('.box');
// for(let i=0; i<box.length; i++){
//     if(box[i].onclick){
//         boxk[i].onclick = checkWin();
//     }
// }
function checkWin(){
    console.log('실행됨!');
    let cnt = 0;
    // -
    for(let i=0; i<SIZE; i++){
        cnt = 0;
        for(let j=0; j<SIZE; j++){
            if(mark[i][j] === turn){
                cnt ++;
            }
        }
        console.log(cnt);
        if(cnt === 3){
            win = turn;
            break;
        }
    }
    // |
    for(let i=0; i<SIZE; i++){
        cnt = 0;
        for(let j=0; j<SIZE; j++){
            if(mark[j][i] == turn){
                cnt ++;
            }
            if(cnt === 3){
                win = turn;
                break;
            }
        }
    }
    // /
    cnt = 0;
    for(let i=0; i<SIZE; i++){
        if(mark[i][SIZE-1-i] === turn){
            cnt ++;
        }
    }
    if(cnt === 3){
        win = turn;
    }
    // \
    cnt = 0;
    for(let i=0; i<SIZE; i++){
        if(mark[i][i] == turn)
            cnt ++;
    }
    if(cnt === 3){
        win = turn;
    }

    if(win === turn){
        alert(`p${win} is WIN!!`);
        location.reload(); // 페이지 새로고침
    }
}