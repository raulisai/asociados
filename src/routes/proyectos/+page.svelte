<svelte:head>
	<title>Proyectos</title>
	<meta name="description" content="About this app" />
</svelte:head>



<!-- Menu.svelte -->
<script>
   let projects = [
    {
      "name": "Catalogo de materiales",
      "description": "catalogo de materiales automatizado con dtaScreping",
      "image": "https://image.isu.pub/200803044922-a85ab900d8415271888323564a2b15ee/jpg/page_1.jpg"
    },
    {
      "name": "Creador de CV",
      "description": "Descripción del proyecto 2",
      "image": "https://www.careeraddict.com/uploads/article/58349/illustration-hands-holding-cvs.jpg"
    },
    {
      "name": "Proyecto 3",
      "description": "Descripción del proyecto 3",
      "image": "https://www.careeraddict.com/uploads/article/58349/illustration-hands-holding-cvs.jpg"
    }
  ];
  </script>
  

  <section>
  <h1>Menú de Proyectos</h1>
  
  <div class="row">
    {#each projects as project}
      <div class="col-md-4">
        <div class="card mb-4">
          <img src={project.image} class="img-thumbnail" style="width:18rem" alt={project.name} />
          <div class="card-body">
            <h4 class="card-title">{project.name}</h4>
            <p class="card-text">{project.description}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
  
</section>