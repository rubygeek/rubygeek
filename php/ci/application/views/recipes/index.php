<?= anchor('recipe/new_recipe', 'Add New Recipe', 'title="add new recipe"');?>
<br/>
<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Source</th>
  </tr>
<?php foreach($recipes as $r) : ?>
  <tr>
    <td><?= $r->title ?></td>
    <td><?= $r->description ?></td>
    <td><?= $r->source ?></td>
    <td><?= anchor('recipe/edit/$r->id')?></td>
  </tr>
<?php endforeach;?>
</table>