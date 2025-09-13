function calcularT(){
    const F=document.getElementById('temperatura').value;
    const C=(parseInt(F)-32)*5/9;
    alert('La temperatura calculada es '+C+'°C');
}