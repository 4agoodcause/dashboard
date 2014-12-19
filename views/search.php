
<form class="search-form">

  <div class="form-item form-label-fade search-input">
    <span class="icon-search"></span>
    <label for="search">John Smith...</label>
    <input type="text" name="search">
  </div>
  
  <div class="form-item form-select search-in-field">
    <select>
      <option>In Field</option>
      <option>First Name</option>
      <option>Last Name</option>
      <option>City</option>
      <option>Email</option>
    </select>
  </div>

  <div class="form-item form-date form-label-fade search-date-from">
    <label for="from">From</label>
    <input type="text" name="from" id="datepicker1">
    <span class="icon-calendar"></span>
  </div>

  <div class="form-item form-date form-label-fade search-date-to">
    <label for="to">To</label>
    <input type="text" name="to" id="datepicker2">
    <span class="icon-calendar"></span>
  </div>

  <div class="search-submit">
    <button>Search</button>
  </div>
  
  <a href="" class="clear-search">Clear Search</a>

</form>

<div class="export-btns">
  <input type="submit" class="btn" value="Export to Excel">
  <input type="submit" class="btn" value="Export to CSV">
</div>