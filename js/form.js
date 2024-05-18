const loginBtn = document.querySelector('.login');
const emailLogin = document.querySelector("#email")
const passwordLogin = document.querySelector("#password")


/* registerBtn.addEventListener('click',()=>{
    container.classList.remove('active');
    inputs.forEach(input => {
        input.value = "";
    })
}); */


const Register = async (e) => {
    e.preventDefault();

    const formData = {
        email: emailRegister.value,
        password:  passwordRegister.value,
    }
    console.log(formData);

    /* try {
      const response = await fetch('http://localhost:3000/v1/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        window.location.href = '../pruebas/main.html'
        console.log('Registro exitoso');
        
      } else {
        console.error('Error en el registro');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    } */
  };



const Login = async (e) => {
    e.preventDefault();

    const formData = {
        email: emailLogin.value,
        password:  passwordLogin.value,
    }

    console.log(formData);
    try {
      const response = await fetch('http://localhost:3000/v1/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const token = await response.json()
      if (response.ok) {
        window.location.href = '../index.html'
        console.log(token);
        localStorage.setItem('token', JSON.stringify(token));
        
      } else {
        console.error('Error al iniciar sesion');
      }
    } catch (error) {
      console.error('Error al iniciar sesion', error);
    }
  };



loginBtn.addEventListener('submit', Login);

