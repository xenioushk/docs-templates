$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Updated:": "<b>Updated:</b>",
      "Fixed:": "<b>Fixed:</b>",
      "Added:": "<b>Added:</b>",
    }

    return string.replace(/Updated:|Fixed:|Added:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "<b>Updated:</b> Template documentation."
    if ($dynamic_log.length) {
      data.forEach((element) => {
        var outputHtml = "<div>"

        outputHtml += `<p class="log_date">` + element[0] + `</p>`

        if (element[1].length > 0) {
          // console.log(element[1])

          outputHtml += `<ul class="square-list">`

          element[1].forEach((log) => {
            outputHtml += `<li>` + updatesLogTag(log) + `</li>`
          })

          outputHtml += `<li>` + commonLogText + `</li>`
          outputHtml += `</ul>`
        }

        outputHtml += "</div>"

        $dynamic_log.before(outputHtml)
      })
    } else {
      alert("#dynamic_log is missing. Example: srcare doc")
    }
  }

  // Update Version and Last Update Info

  function updateMetaInfo(metaData) {
    const $lastUpdate = $(".update"),
      $ver = $(".ver")

    if ($lastUpdate.length) {
      $ver.html("").html(metaData[0])
      $lastUpdate.html("").html(metaData[1])
    } else {
      alert(".update is missing. Example: srcare doc")
    }
  }
  // Change only the version and date
  var metaData = ["1.0.3", "17/09/2023"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2018, November 23 - v 1.0.3", ["Fixed: Slider Issue For Safari Browser."]],
    ["2018, July 07 - v 1.0.2", ["Updated: Slider Code."]],
    ["2018, April 19 - v 1.0.1", ["Added: Home 2 and One Paged Version.", "Fixed: countdown issue."]],
  ]
  generateDynamicLog(changeLogData)
})
