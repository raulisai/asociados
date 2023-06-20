<script>
   
  
    let jobs = [];
  
    function agregarTrabajo() {
      jobs = [...jobs, { empresa: '', fechaIngreso: '', fechaSalida: '', actividades: '' }];
    }
  
    function eliminarTrabajo(index) {
      jobs = jobs.filter((_, i) => i !== index);
    }
  </script>
  
  <style>
    .job-container {
      margin-bottom: 20px;
    }
  
    .job {
      margin-bottom: 10px;
    }
  </style>
  
  <div class="container">
    <div class="job-container">
        <h4>Agregar Trabajos</h4>
      {#each jobs as job, index}
        <div class="card job">
          <div class="card-body">
            <h5 class="card-title">Trabajo {index + 1}</h5>
  
            <div class="form-group">
              <label>Nombre de la empresa</label>
              <input type="text" class="form-control" bind:value={job.empresa} />
            </div>
  
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Fecha de ingreso</label>
                <input type="text" class="form-control" bind:value={job.fechaIngreso} />
              </div>
  
              <div class="form-group col-md-6">
                <label>Fecha de salida</label>
                <input type="text" class="form-control" bind:value={job.fechaSalida} />
              </div>
            </div>
  
            <div class="form-group">
              <label>Actividades realizadas</label>
              <textarea class="form-control" rows="3" bind:value={job.actividades}></textarea>
            </div>
  
            <button class="btn btn-danger" on:click={() => eliminarTrabajo(index)}>
              Eliminar
            </button>
          </div>
        </div>
      {/each}
    </div>
  
    <button class="btn btn-primary" on:click={agregarTrabajo}>
      Agregar Trabajo
    </button>
  </div>
  