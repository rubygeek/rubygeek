<?= anchor('recipes/new_recipe', 'Add New Recipe', 'title="add new recipe"');?>
<?= $pagination ?>
<br/>
<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Source</th>
  </tr>
<?php foreach($recipes as $r) : ?>
  <tr>
    <td><?= anchor("recipes/show_recipe/$r->id",$r->title) ?></td>
    <td><?= $r->description ?></td>
    <td><?= $r->source ?></td>
    <td><?= anchor("recipe/edit/$r->id")?></td>
  </tr>
<?php endforeach;?>
</table>
