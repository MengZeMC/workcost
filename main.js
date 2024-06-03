const $ = id => document.getElementById(id);
const getValByEle = ele => {
  let val = parseFloat(ele.value);
  return isNaN(val) ? 0 : val;
};

const $monthSalary = $('monthSalary'),
  $dayWorkingHours = $('dayWorkingHours'),
  $dayCommutingHours = $('dayCommutingHours'),
  $dayLazinessHours = $('dayLazinessHours'),
  $education = $('education'),
  $workEnvironment = $('workEnvironment'),
  $oppsiteSex = $('oppsiteSex'),
  $colleague = $('colleague'),
  $eightOClock = $('eightOClock');

const $submit = $('submit'),
  $result = $('result');

const calcResult = () => {
  let daySalary = getValByEle($monthSalary) / 21.75,
    dayWorkingHours = getValByEle($dayWorkingHours),
    dayCommutingHours = getValByEle($dayCommutingHours),
    dayLazinessHours = getValByEle($dayLazinessHours),
    education = getValByEle($education),
    workEnvironment = getValByEle($workEnvironment),
    oppsiteSex = getValByEle($oppsiteSex),
    colleague = getValByEle($colleague);

  let isEightOClock = $eightOClock.checked;

  let result = daySalary * (1 * workEnvironment * oppsiteSex * colleague) / (35 * (dayWorkingHours + dayCommutingHours - 0.5 * dayLazinessHours) * education) * (isEightOClock ? 0.95 : 1);
  result = result.toFixed(2);

  return result;
}

$submit.onclick = () => {
  $result.innerText = calcResult();
}