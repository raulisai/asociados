<script>
import Skill from './skill.svelte'

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


<section>

    <Skill/>

</section>