<script>
    import Form from "./Form.svelte";
    import { onMount } from "svelte";

    let SaveCv = false;
    let activeFormcv=false
    let button1Text = "Crear Cv";

    if (SaveCv) {
        button1Text = "Actualizar Cv";
    }

    function handlerCv() {

        console.log("hello")
        activeFormcv=!activeFormcv
        button1Text = "Ocultar seccion Cv";

        if (activeFormcv == false) {
        button1Text = "Crear Cv";
    }

    }

    let data = [
        {
            puesto: "Desarrollador web",
            empresa: "ABC Company",
            cv: "CV A",
            estatus: "En revisión",
        },
        {
            puesto: "Diseñador gráfico",
            empresa: "XYZ Agency",
            cv: "CV B",
            estatus: "Rechazado",
        },
        {
            puesto: "Gerente de proyectos",
            empresa: "123 Corporation",
            cv: "CV C",
            estatus: "Aprobado",
        },
    ];

    onMount(() => {
        // Aquí podrías cargar los datos de tu API o cualquier otra fuente de datos
    });
</script>

<section class="row">
    <h3>Creador de Cv Automatizado</h3>

    <table class="table table-striped">
        <thead>
            <tr>
                <th>Puesto</th>
                <th>Empresa</th>
                <th>CV usado</th>
                <th>Estatus</th>
            </tr>
        </thead>
        <tbody>
            {#each data as item}
                <tr>
                    <td>{item.puesto}</td>
                    <td>{item.empresa}</td>
                    <td>{item.cv}</td>
                    <td>{item.estatus}</td>
                </tr>
            {/each}
        </tbody>
    </table>
    <div class="col-md-12">
        <div class="row">
            <div class="col-6">
                <button class="btn" on:click={handlerCv}>{button1Text}</button>
            </div>
        </div>
    </div>

    <div class="col-12">

{#if activeFormcv}
<Form/>
{/if}

    </div>
</section>

<style>
    .table {
        margin-bottom: 0; /* Para evitar espacios innecesarios en la parte inferior de la tabla */
    }
</style>
