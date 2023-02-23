import React from "react";
import "./Body.css"

function Body({ embedId }) {
  return (
    <div className="body">
      <div>
        <iframe
          width="753"
          height="380"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div width="inherit">
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          in interdum magna, id pellentesque lacus. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos.
          Maecenas ultricies pretium libero eu fringilla. Curabitur eget nibh a
          arcu ornare interdum ac ultricies leo. Praesent ullamcorper libero
          enim, sit amet imperdiet odio sodales vitae. Aenean in ornare nisl,
          vel luctus dui. Aenean a quam magna. Aenean euismod tortor ac
          tincidunt egestas. Aenean enim sapien, consectetur at elit at,
          lobortis ornare dolor. Cras non efficitur eros. Curabitur ullamcorper
          non urna et tempor. Integer bibendum vitae ligula ut laoreet. Duis
          pulvinar, felis non congue varius, quam ligula pharetra risus, eu
          consectetur nibh nibh sed sem. Suspendisse potenti. Vivamus efficitur
          dui nec felis auctor eleifend. Integer a lectus ex. Donec ac
          ullamcorper elit. Sed nec ultrices ipsum. Quisque ac dignissim metus.
          Sed augue velit, luctus quis ultricies in, cursus vel eros. Aenean
          tincidunt urna eu lacus mattis consectetur. Praesent condimentum sem
          posuere, tempor felis quis, vehicula turpis. Nam convallis, nisl et
          aliquet auctor, turpis massa consequat mauris, vitae euismod lacus
          tellus at metus. Mauris maximus ex nunc, eu ullamcorper purus
          efficitur eget. Morbi id euismod diam. Proin blandit viverra lacus at
          luctus. Sed erat ante, auctor quis porta a, lacinia vel risus.
          Suspendisse rutrum turpis ante, id facilisis eros ullamcorper non.
          Donec tempor varius mi, at malesuada est iaculis sed. Duis viverra
          justo iaculis quam luctus, in ultricies erat cursus. Phasellus dapibus
          massa a tempor malesuada. Morbi gravida varius metus laoreet placerat.
          Mauris semper odio sed nibh varius placerat. Morbi varius euismod
          quam, at tristique magna pharetra sed. Phasellus posuere eu libero sed
          dignissim. Curabitur vitae urna quis odio porttitor porta in ut ex.
          Vivamus tincidunt, arcu at cursus cursus, odio sapien elementum est,
          nec lacinia dui tortor at orci. Curabitur sapien nisi, mollis vel erat
          non, lobortis posuere massa. Curabitur non scelerisque sapien, in
          tempor nisl. Praesent maximus arcu ut turpis placerat luctus. Nunc
          malesuada urna a nulla imperdiet maximus. Nulla quis lobortis nisl. Ut
          lobortis purus sit amet justo cursus, ac viverra diam condimentum. Sed
          non ante justo. Vestibulum et neque placerat, luctus diam tincidunt,
          sagittis orci. Fusce dictum luctus felis, id accumsan libero imperdiet
          eget. Mauris facilisis ac metus eu ornare. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent tempus lectus vitae dui
          efficitur volutpat. Maecenas vel sem quis sapien convallis laoreet.
          Pellentesque vulputate urna quis nisi lacinia pulvinar. Curabitur
          elementum cursus nibh, eget faucibus elit egestas viverra. Aliquam in
          ultrices neque. Aliquam blandit sem volutpat, laoreet quam et,
          eleifend dui. Sed a urna tellus. Fusce pretium volutpat sem vitae
          sodales. Praesent a maximus mi. Nunc convallis pretium varius. Quisque
          sit amet massa sagittis, elementum nibh vel, consequat ante.
          Suspendisse eros ex, dignissim vitae placerat id, rutrum id nisl. Nunc
          dolor mi, ornare id blandit eget, blandit ac leo. Nam scelerisque sem
          sit amet metus posuere feugiat. Aliquam efficitur, risus eu interdum
          tempus, est massa imperdiet lectus, quis suscipit tellus purus eu
          nisi. Ut quis ultricies nisl, eu accumsan.
        </p>
      </div>
    </div>
  );
}

export default Body;
