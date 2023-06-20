<!-- Menu.svelte -->
<script>
	let projects = [
		{
			name: "Catalogo de materialesss",
			description: "catalogo de materiales automatizado con dtaScreping",
			image: "https://image.isu.pub/200803044922-a85ab900d8415271888323564a2b15ee/jpg/page_1.jpg",
			url:"/proyects/catalogoproducts"
		},
		{
			name: "Creador de CV",
			description: "Descripción del proyecto 2",
			image: "https://www.careeraddict.com/uploads/article/58349/illustration-hands-holding-cvs.jpg",
			url:"/proyects/searchjobs"
		},
		{
			name: "Proyecto 3",
			description: "Descripción del proyecto 3",
			image: "https://www.careeraddict.com/uploads/article/58349/illustration-hands-holding-cvs.jpg",
			url:"/proyects/searchjobs"
		},
		{
			name: "Creador de CV",
			description: "Descripción del proyecto 2",
			image: "https://www.careeraddict.com/uploads/article/58349/illustration-hands-holding-cvs.jpg",
			url:"/proyects/searchjobs"
		},
		{
			name: "Proyecto 3",
			description: "Descripción del proyecto 3",
			image: "https://www.careeraddict.com/uploads/article/58349/illustration-hands-holding-cvs.jpg",
			url:"/proyects/searchjobs"
		}
	];
</script>

<svelte:head>
	<title>Proyectos</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="row">
	<div class="col-12 mt-5">
		<h3>Menú de Proyectos</h3>
		{#each projects as project}
			<div class="row mt-3">
				<div class="col-4">
					<img
						src={project.image}
						class="img-thumbnail"
						style="width:18rem"
						alt={project.name}
					/>
				</div>
				<div class="col-8">
					<a href={project.url}><h4 class="card-title">{project.name}</h4></a>
					<p class="card-text">{project.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
