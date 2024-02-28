export const registro = {
    template : `
<div class="container">
    <div class="row justify-content-center mt-5"> 
        <div class="col-md-6">
            <div class="card shadow rounded"> 
                <div class="card-body">
                    <h2 class="mb-4 text-center">Registrarse</h2> 
                    <form id="formRegistro">
                        <div class="mb-3">
                            <label for="email" class="form-label">Correo electrónico</label>
                            <input type="email" class="form-control" id="emailRegistro" placeholder="usuario@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="contraseña" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="passwordRegistro" placeholder="Contraseña">
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary" id="btnEntrarRegistro">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
`

}
