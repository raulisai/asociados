<script>
    
    let skills = [];
  
    function agregarSkill() {
      skills = [...skills, ''];
    }
  
    function eliminarSkill(index) {
      skills = skills.filter((_, i) => i !== index);
    }
  </script>
  
  <style>
    .skill-container {
      margin-bottom: 10px;
    }
  
    .skill {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
    }
  
    .skill input[type="text"] {
      width: 200px;
    }
  
    .skill button {
      margin-left: 10px;
    }
  </style>
  
  <div class="container">
    <div class="skill-container">
        <h4>Intereses (hobies)</h4>
      {#each skills as skill, index}
        <div class="skill">
          <input type="text" class="form-control" bind:value={skill} />
  
          <button class="btn btn-danger" on:click={() => eliminarSkill(index)}>
            Eliminar
          </button>
        </div>
      {/each}
    </div>
  
    <button class="btn btn-primary" on:click={agregarSkill}>
      Agregar Skill
    </button>
  </div>
  