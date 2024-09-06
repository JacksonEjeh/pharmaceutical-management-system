document.getElementById('menu').addEventListener('click', function(){
    document.getElementById('mobileView').classList.remove('hidden')
})
document.getElementById('closeMenu').addEventListener('click', function(){
    document.getElementById('mobileView').classList.add('hidden')
})

function showAppointmentForm(){
    window.location.href = 'appointPage.html'
}

function bookAppointment(event) {
    event.preventDefault();
    let bookingDetails = {
        name: document.getElementById('name').value,
        specialization: document.getElementById('specialization').value,
        doctor: document.getElementById('doctors').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phoneNumber').value,
        Comment: document.getElementById('Comment').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value
    }

    let valid = true

    if(bookingDetails.name === ""){
        valid = false
        document.getElementById('name').classList.add('shadow-red-200', 'shadow-md');
        document.getElementById('err').innerHTML='Please enter name'
        setTimeout(()=>{
            document.getElementById('err').innerHTML=''
            document.getElementById('name').classList.remove('shadow-red-200', 'shadow-md');
        }, 2000)
    }
    else if (bookingDetails.specialization === "") {
        valid = false
        document.getElementById('specialization').classList.add('shadow-red-200', 'shadow-md');
        document.getElementById('err2').innerHTML='Please select department'
        setTimeout(()=>{
            document.getElementById('err2').innerHTML=''
            document.getElementById('specialization').classList.remove('shadow-red-200', 'shadow-md');
        }, 2000)
    }
    else if(bookingDetails.doctor == ""){
        valid = false
        document.getElementById('doctors').classList.add('shadow-red-200', 'shadow-md');
        document.getElementById('err3').innerHTML='Please pick a doctor'
        setTimeout(()=>{
            document.getElementById('err3').innerHTML=''
            document.getElementById('doctors').classList.remove('shadow-red-200', 'shadow-md');
        }, 2000)
    }
    else if(bookingDetails.email == ""){
        valid = false
        document.getElementById('email').classList.add('shadow-red-200', 'shadow-md');
        document.getElementById('err4').innerHTML='Please enter email'
        setTimeout(()=>{
            document.getElementById('err4').innerHTML=''
            document.getElementById('email').classList.remove('shadow-red-200', 'shadow-md');
        }, 2000)
    }
    else if(bookingDetails.phone == ""){
        valid = false
        document.getElementById('phoneNumber').classList.add('shadow-red-200', 'shadow-md');
        document.getElementById('err5').innerHTML='Please enter phone'
        setTimeout(()=>{
            document.getElementById('err5').innerHTML=''
            document.getElementById('phoneNumber').classList.remove('shadow-red-200', 'shadow-md');
        }, 2000)
    }
    else if(bookingDetails.date == ""){
        valid = false
        document.getElementById('date').classList.add('shadow-red-200', 'shadow-md');
        document.getElementById('err7').innerHTML='Please enter phone'
        setTimeout(()=>{
            document.getElementById('err5').innerHTML=''
            document.getElementById('date').classList.remove('shadow-red-200', 'shadow-md');
        }, 2000)
    }
    else if(bookingDetails.time == ""){
        valid = false
        document.getElementById('time').classList.add('shadow-red-200', 'shadow-md');
        document.getElementById('err8').innerHTML='Please enter phone'
        setTimeout(()=>{
            document.getElementById('err5').innerHTML=''
            document.getElementById('time').classList.remove('shadow-red-200', 'shadow-md');
        }, 2000)
    }
    else if(bookingDetails.Comment == ""){
        valid = false
        document.getElementById('Comment').classList.add('shadow-red-200', 'shadow-md');
        document.getElementById('err6').innerHTML='Please enter comment'
        setTimeout(()=>{
            document.getElementById('err6').innerHTML=''
            document.getElementById('Comment').classList.remove('shadow-red-200', 'shadow-md');
        }, 2000)
    }
    else{
        valid = true
        window.location.href = 'appointDetail.html'
        localStorage.setItem('patient Details', JSON.stringify(bookingDetails));
    }
}

document.getElementById('specialization').addEventListener('change', function(){
    if (this.value === 'Eye Care') {
        document.getElementById('eyecareDoc').classList.remove('hidden')
        document.getElementById('eyecareDoc2').classList.remove('hidden')
    }else{
        document.getElementById('eyecareDoc').classList.add('hidden')
        document.getElementById('eyecareDoc2').classList.add('hidden')
    }
    if (this.value === 'Psychotherapy') {
        document.getElementById('Psychotherapy').classList.remove('hidden')
    }else{
        document.getElementById('Psychotherapy').classList.add('hidden')
    }
    if (this.value === 'Primary Care') {
        document.getElementById('PrimaryCare').classList.remove('hidden')
    }else{
        document.getElementById('PrimaryCare').classList.add('hidden')
    }
    if (this.value === 'Dental Care') {
        document.getElementById('DentalCare').classList.remove('hidden')
    }else{
        document.getElementById('DentalCare').classList.add('hidden')
    }
    if (this.value === 'Orthopedic') {
        document.getElementById('Orthopedic').classList.remove('hidden')
    }else{
        document.getElementById('Orthopedic').classList.add('hidden')
    }
    if (this.value === 'Cardiology') {
        document.getElementById('Cardiology').classList.remove('hidden')
    }else{
        document.getElementById('Cardiology').classList.add('hidden')
    }
})