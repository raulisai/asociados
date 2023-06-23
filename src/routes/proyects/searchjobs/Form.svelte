<script>
    import Skill from "./skill.svelte";
    import Hobbies from "./hobbies.svelte";
    import Skilltecnic from "./skilltecnic.svelte";
    import Works from "./works.svelte";
</script>

<section class="row">
    <div class="col-12">
        <h3 class="ms-5">Crea tu cv</h3>

        <div class="row mt-3">
            <div class="col">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                    aria-label="Nombre"
                />
            </div>
            <div class="col">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Apellido"
                    aria-label="Apellido"
                />
            </div>
            <div class="col">
                <input
                    type="number"
                    class="form-control"
                    placeholder="Edad"
                    aria-label="Edad"
                />
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-6">
                <input
                    type="correo"
                    class="form-control"
                    placeholder="correo"
                    aria-label="Nombre"
                />
            </div>
            <div class="col-md-6">
                <input
                    type="number"
                    class="form-control"
                    id="colFormLabel"
                    placeholder="telefono"
                />
            </div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="profesion"
                        aria-label="Nombre"
                    />
                </div>
                <div class="col-md-6">
                    <input
                        type="text"
                        class="form-control"
                        id="colFormLabel"
                        placeholder="especialidad"
                    />
                </div>
                <div class="col-md-12 mt-5">
                    <textarea
                        class="responsive-textarea"
                        placeholder="Descripcion"
                    />
                </div>
            </div>
        </div>

        <div class="row">
            <h4>Skills</h4>
            <div class="col-12">
                <div class="row">
                    <div class="col-6">
                        <Skill />
                    </div>
                    <div class="col-6">
                        <Skilltecnic />
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <Hobbies />
                    </div>
                    <div class="col-6">
                        <Works />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .responsive-textarea {
        width: 100%;
        max-width: 1200px;
        height: 100px;
        resize: vertical;
    }
</style>
